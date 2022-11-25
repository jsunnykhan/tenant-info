use anchor_lang::prelude::*;

declare_id!("3eRQ4SdmGKpN7RYWkU1eutNNDPfE7efpqcbkSUTLqz8t");

#[program]
pub mod tenant {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
