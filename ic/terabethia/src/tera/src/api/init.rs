use ic_cdk::caller;
use ic_cdk_macros::init;

use crate::STATE;

#[init]
fn init() {
    STATE.with(|s| s.authorized.borrow_mut().push(caller()));
}
