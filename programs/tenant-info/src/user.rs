use anchor_lang::prelude::*;

#[account]
pub struct UserInfo {
    pub name: String,
    pub father_name: String,
    pub date_of_birth: String,
    pub status: Option<Status>,
    pub parmanent_address: String,
    pub occupation: String,
    pub religion: String,
    pub education: Option<Education>,
    pub nid: String,
    pub passport: Option<String>,
    pub birth_certificate: Option<String>,
    pub alternative_address: String,
    pub other_member: Vec<Pubkey>,
    pub signature: Pubkey,
    pub house: Vec<House>,
    pub comments: Vec<String>,
}


#[derive(AnchorDeserialize, AnchorSerialize, Clone)]
pub struct House {
    pub key: Pubkey,
    pub start: String,
    pub end: String,
}

#[derive(AnchorDeserialize, AnchorSerialize, Clone, Copy)]
pub enum Status {
    SINGLE,
    MARRIED,
    DIVORCED,
}

#[derive(AnchorDeserialize, AnchorSerialize, Clone, Copy)]
pub enum Education {
    PSC,
    JSC,
    SSC,
    HSC,
    BSC,
    MSC,
    PHD,
}
