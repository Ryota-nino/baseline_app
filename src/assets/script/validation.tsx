export const handleChange = (state: any, setState: any, event: any) => {
  const name = event.target.name;
  const value = event.target.value;
  const { info, message } = state;
  setState({
    info: { ...info, [name]: value },
    message: { ...message, [name]: validator(name, value) },
  });
};

export const validator = (name: string, value: string) => {
  switch (name) {
    case "email":
      return emailValidation(value);
    case "content":
      return contentValidation(value);
    case "password":
      return passwordValidation(value);
  }
};

export const emailValidation = (value: string) => {
  if (!value) return "※メールアドレスを入力してください";
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(value))
    return "※正しい形式でメールアドレスを入力してください";
  return "";
};

export const contentValidation = (value: string) => {
  if (!value) return "※内容を入力してください";
  if (value.length < 8) return "※内容は8文字以上で入力してください";
  return "";
};

export const numberValidation = (value: number) => {
  if (!value) return "内容を入力してください";
};

export const passwordValidation = (value: string) => {
  if (!value) return "※パスワードを入力してください";
  if (value.length > 12) return "※パスワードは12文字以下で入力してください";
  return "";
};
