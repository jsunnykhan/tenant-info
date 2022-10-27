use anchor_lang::prelude::*;
pub mod user;
use crate::user::*;

declare_id!("HibQzdWgu2JhVVHuizrYNfyvgwk7BHjaR1ZaS6ah4eYT");

#[program]
pub mod tenant_info {
    use super::*;

    pub fn create_user(ctx: Context<CreateUser>, userInfo: UserInfo) -> Result<()> {
        let user = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        user.name = userInfo.name;
        user.father_name = userInfo.father_name;
        user.signature = authority.key();

        Ok(())
    }
    pub fn modify_user(ctx: Context<ModifyUser>) -> Result<()> {
        Ok(())
    }

    pub fn add_house(ctx: Context<AddHouse>) -> Result<()> {
        Ok(())
    }

    pub fn add_tenant(ctx: Context<AddTenant>) -> Result<()> {
        Ok(())
    }

    pub fn remove_tenant(ctx: Context<RemoveTenant>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateUser<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(
      init,
      seeds = [ b"user".as_ref() , authority.key().as_ref()],
      bump,
      payer = authority,
      space = 8 + std::mem::size_of::<UserInfo>(),
    )]
    pub user_account: Box<Account<'info, UserInfo>>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ModifyUser {}

#[derive(Accounts)]
pub struct AddHouse {}

#[derive(Accounts)]
pub struct AddTenant {}

#[derive(Accounts)]
pub struct RemoveTenant {}
