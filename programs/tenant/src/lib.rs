use anchor_lang::prelude::*;

declare_id!("4cgcuEHRPkBvpXMG2gEhM3ytZ1FMNTdjjqytV7Kjmk9g");

#[program]
pub mod tenant {
    use super::*;

    pub fn remove_house_cpi(_ctx: Context<RemoveHouseCpi>, _mint: Pubkey) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct RemoveHouseCpi<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
}

// impl<'info> InitializeHouse<'info> {
//     pub fn set_mint_ctx(&self) -> CpiContext<'_, '_, '_, 'info, SetMintKey<'info>> {
//         let cpi_program = self.user_program.to_account_info();
//         let cpi_account = SetMintKey {
//             authority: self.authority.to_account_info(),
//             user_profile: self.user_account.to_account_info(),
//         };

//         CpiContext::new(cpi_program, cpi_account)
//     }
// }

// impl<'info> RemoveHouseCpi<'info> {
//     pub fn remove_house_ctx(
//         &self,
//         mint: Pubkey,
//     ) -> CpiContext<'_, '_, '_, 'info, RemoveHouse<'info>> {

//         let (pda, bump) = Pubkey::find_program_address(
//             &[b"house".as_ref(), mint.key().as_ref()],
//             &self.house_program.key(),
//         );
//         //create first cpi program
//         let house_program = self.house_program.to_account_info();
//         // then create cpi account
//         let cpi_account = RemoveHouse {
//             authority: self.authority.to_account_info(),
//             house_account:
//         };

//         CpiContext::new(house_program, cpi_account)
//     }
// }
