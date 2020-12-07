import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../assets/images/index";
import { RoundedBtn } from "../../Atoms/Btn";
import { registEntry, registSelection } from "../../../assets/script";

interface Props {
  needBtn: boolean;
  match?: any;
}
const HeaderRegister: React.FC<Props> = (props) => {
  const onSaveHandler = () => {
    const thisPageName = document.querySelector(
      ".company-info-edit__container"
    )!.id;
    let sendJSON: any;
    const formObj: any = {};
    const editForms = document.forms;
    const companyId = props.match.params.id;
    console.log(companyId);

    // ステップページ
    if (thisPageName == "type-step") {
      const interviewForms = editForms[0].querySelectorAll(
        ".interview-formBox"
      );
      const contentForms: any = {};
      formObj.company_id = Number(companyId);
      // formObj.internship_id = editForms[0].selection_type.value;
      formObj.internship_id = 1;
      formObj.occupational_category_id = Number(editForms[0].job.value);
      formObj.items = [];

      interviewForms.forEach((form) => {
        const titleInput = form.querySelector(
          'input[name="title"]'
        ) as HTMLInputElement;
        const dateSelect = form.querySelector(
          'select[name="date"]'
        ) as HTMLInputElement;
        const textarea = document.querySelector("textarea")!;
        contentForms.title = titleInput.value;
        contentForms.interview_date = Number(dateSelect.value);
        contentForms.content = textarea.value;
        formObj.items.push(contentForms);
      });
      console.log(formObj);
      registSelection(formObj);
      sendJSON = JSON.stringify(formObj);
      // インタビューページ
    } else if (thisPageName == "type-interview") {
      const sendData: any = [];
      for (let i = 0; i < editForms.length; i++) {
        formObj.company_id = Number(companyId);
        // formObj.internship_id = editForms[i].selection_type.value;
        formObj.internship_id = Number(1);
        formObj.occupational_category_id = Number(editForms[0].job.value);
        formObj.result = Number(editForms[i].result.value);
        const interviewForms = editForms[i].querySelectorAll(
          ".interview-formBox"
        );
        formObj.items = [];
        const items: any = [];
        interviewForms.forEach((form) => {
          const contentForms: any = {};
          contentForms.date = form.querySelector("select")!.value;
          contentForms.content = form.querySelector("textarea")!.value;
          items.push(contentForms);
        });
        sendData.push(items);
      }
      console.log(formObj);
      sendJSON = JSON.stringify(sendData);
      // エントリーページ
    } else if (thisPageName == "type-entry") {
      const interviewForms = editForms[0].querySelectorAll(
        ".interview-formBox"
      );

      formObj.company_id = Number(companyId);
      // formObj.internship_id = Number(editForms[0].selection_type.value);
      formObj.internship_id = Number(1);
      formObj.occupational_category_id = Number(editForms[0].job.value);
      formObj.items = [];
      const contentForms: any = {};
      interviewForms.forEach((form) => {
        const titleInput = form.querySelector(
          'input[name="title"]'
        ) as HTMLInputElement;
        const textarea = document.querySelector("textarea")!;
        contentForms.title = titleInput.value;
        contentForms.content = textarea.value;
        formObj.items.push(contentForms);
      });
      console.log(formObj);
      registEntry(formObj);
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
