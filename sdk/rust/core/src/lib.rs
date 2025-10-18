pub fn sdk_hello() -> &'static str {
    "hello from sdk-core"
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(sdk_hello(), "hello from sdk-core");
    }
}
