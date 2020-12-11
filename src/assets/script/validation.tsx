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
    case "number":
      return numberValidation(value);
    case "title":
      return titleValidation(value);
    case "company_name":
      return companyNameValidation(value);
    case "furigana":
      return furiganaValidation(value);
    case "url":
      return urlValidation(value);
    case "business":
      return businessTextValidation(value);
    case "student_number":
      return studentNumberValidation(value);
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

export const numberValidation = (value: any) => {
  if (!value) return "内容を入力してください";
  if (isNaN(value)) {
    return "数字で入力してください";
  }
};

export const titleValidation = (value: any) => {
  if (!value) return "内容を入力してください";
  if (value.length < 30) return "※内容は30文字以上で入力してください";
};

export const companyNameValidation = (value: any) => {
  if (!value) return "※企業名を入力してください";
  if (value.length > 30) return "※企業名は30文字以内で入力してください";
};

const isZenkakuKana = (s: string) => {
  return !!s.match(/^[ァ-ヶー　]*$/); // 「　」は全角スペースです.
};

export const furiganaValidation = (value: any) => {
  if (!value) return "※フリガナを入力してください";
  if (!isZenkakuKana(value)) return "※フリガナはカタカナで入力してください";
};

const isURL = (s: string) => {
  return !!s.match(/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g);
};
export const urlValidation = (value: string) => {
  if (!value) return "※URLを入力してください";
  if (!isURL(value)) return "※httpから始まるURLの形式で入力してください";
};

export const passwordValidation = (value: string) => {
  if (!value) return "※パスワードを入力してください";
  if (value.length > 12) return "※パスワードは12文字以下で入力してください";
  return "";
};

export const businessTextValidation = (value: string) => {
  if (!value) return "※事業内容を入力してください";
  if (value.length > 200) return "※事業内容は200文字以下で入力してください";
  return "";
};

export const studentNumberValidation = (value: string) => {
  if (!value) return "※学籍番号を入力してください";
  if (value.length == 7) return "※７桁の学籍番号で入力してください";
  return "";
};
