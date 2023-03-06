export function RegistrationInput(props: {
  account: string | undefined;
  text: string;
  placeholder: string;
}) {
  const { account, text, placeholder } = props;
  const disable = !account;
  return (
    <input
      disabled={disable}
      autoComplete="off"
      placeholder={`We will display your ${placeholder} in participation list`}
      className="w-[421px] h-[42px] border rounded-custom_Rad pl-[18px] py-3 bg-[#171719] font-AvenirNextCyr outline-none  focus:border-inputFocus  focus:placeholder-transparent disabled:placeholder:opacity-25 disabled:border-inputDisabled"
      type="text"
      id="firstName"
    />
  );
}
