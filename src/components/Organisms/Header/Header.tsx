import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../assets/images/index";
import { RoundedBtn } from "../../Atoms/Btn";

interface Props {
  needBtn: boolean;
}
const HeaderRegister: React.FC<Props> = (props) => {
  const onSaveHandler = () => {
    const thisPageName = document.querySelector(
      ".company-info-edit__container"
    )!.id;
    let sendJSON: any;
    const formObj: any = {};
    const editForms = document.forms;

    // ステップページ
    if (thisPageName == "type-step") {
      const interviewForms = editForms[0].querySelectorAll(
        ".interview-formBox"
      );
      const contentForms: any = {};
      formObj.selection_type = editForms[0].selection_type.value;
      formObj.job = editForms[0].job.value;
      formObj.contents = [];
      interviewForms.forEach((form) => {
        const titleInput = form.querySelector(
          'input[name="title"]'
        ) as HTMLInputElement;
        const dateSelect = form.querySelector(
          'select[name="date"]'
        ) as HTMLInputElement;
        const textarea = document.querySelector("textarea")!;
        contentForms.title = titleInput.value;
        contentForms.date = dateSelect.value;
        contentForms.text = textarea.value;
        formObj.contents.push(contentForms);
      });
      console.log(formObj);
      sendJSON = JSON.stringify(formObj);
      // インタビューページ
    } else if (thisPageName == "type-interview") {
      const sendData: any = [];
      for (let i = 0; i < editForms.length; i++) {
        formObj.selection_type = editForms[i].selection_type.value;
        formObj.job = editForms[i].job.value;
        formObj.result = editForms[i].result.value;
        const interviewForms = editForms[i].querySelectorAll(
          ".interview-formBox"
        );
        formObj.contents = [];
        const contents: any = [];
        interviewForms.forEach((form) => {
          const contentForms: any = {};
          contentForms.date = form.querySelector("select")!.value;
          contentForms.text = form.querySelector("textarea")!.value;
          contents.push(contentForms);
        });
        sendData.push(contents);
        // console.log(sendData);
      }
      console.log(sendData);
      sendJSON = JSON.stringify(sendData);
      // エントリーページ
    } else if (thisPageName == "type-entry") {
      const interviewForms = editForms[0].querySelectorAll(
        ".interview-formBox"
      );

      formObj.selection_type = editForms[0].selection_type.value;
      formObj.job = editForms[0].job.value;
      formObj.contents = [];
      const contentForms: any = {};
      interviewForms.forEach((form) => {
        const titleInput = form.querySelector(
          'input[name="title"]'
        ) as HTMLInputElement;
        const textarea = document.querySelector("textarea")!;
        contentForms.title = titleInput.value;
        contentForms.text = textarea.value;
        formObj.contents.push(contentForms);
      });
      console.log(formObj);
      sendJSON = JSON.stringify(formObj);
    }
    // console.log(sendJSON);
  };
  return (
    <header className="headerRegister">
      <h1 className="headerRegister__logo">
        <Link to="">
          <img src={Logo} alt="" />
        </Link>
      </h1>
      {props.needBtn && (
        <div className="header-side__right">
          <Link to="/company-info" className="header-side__cancel btn">
            キャンセル
          </Link>
          <RoundedBtn txt="保存" Func={onSaveHandler} />
        </div>
      )}
    </header>
  );
};

export default HeaderRegister;
