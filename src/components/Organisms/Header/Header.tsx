import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Logo } from "../../../assets/images/index";
import { RoundedBtn } from "../../Atoms/Btn";
import {
  registEntry,
  registSelection,
  registInterview,
} from "../../../assets/script";
import { Contents } from "../CompanyDetail";

interface Props {
  needBtn: boolean;
  match?: any;
}
const HeaderRegister: React.FC<Props> = (props) => {
  const history = useHistory();
  const onSaveHandler = () => {
    const thisPageName = document.querySelector(
      ".company-info-edit__container"
    )!.id;
    let sendJSON: any;
    const formObj: any = {};
    const editForms = document.forms;
    const companyId = props.match.params.id;
    interface sendData {
      company_id: number;
      internship_id: number;
      occupational_category_id: number;
      items: object[];
    }
    const setGlobalSelect = () => {
      const selectionType = (document.querySelector(
        'select[name="selection_type"]'
      ) as HTMLSelectElement).value;
      const selectJob = (document.querySelector(
        'select[name="job"]'
      ) as HTMLSelectElement).value;
      let sendData: sendData = {
        company_id: Number(companyId),
        internship_id: Number(selectionType),
        occupational_category_id: Number(selectJob),
        items: [],
      };
      return sendData;
    };
    // ステップページ
    if (thisPageName == "type-step") {
      let sendData = setGlobalSelect();

      const contents = document.querySelectorAll(
        ".interview-formBox"
      ) as NodeListOf<HTMLElement>;
      console.log(sendData);
      contents.forEach((content) => {
        console.log(content);
        let itemsData = {
          title: (content.querySelector(
            'input[name="title"]'
          ) as HTMLInputElement).value,
          interview_date: Number(
            (content.querySelector('select[name="date"]') as HTMLSelectElement)
              .value
          ),
          content: (content.querySelector("textarea") as HTMLTextAreaElement)
            .value,
        };
        sendData.items.push(itemsData);
      });
      console.log(sendData);
      registSelection(sendData).then((boolean) => {
        if (boolean) {
          history.push(`/company-detail/${companyId}/step`);
        }
      });

      // インタビューページ
    } else if (thisPageName == "type-interview") {
      // 共通項目
      let sendData = setGlobalSelect();

      for (let i = 0; i < editForms.length; i++) {
        const contentArray: string[] = [];
        const contents = editForms[i].querySelectorAll(
          ".interview-formBox textarea"
        ) as NodeListOf<HTMLTextAreaElement>;
        const result = (editForms[i].querySelector(
          'select[name="result"]'
        ) as HTMLSelectElement).value;
        const date = (editForms[i].querySelector(
          'select[name="date"]'
        ) as HTMLSelectElement).value;
        contents.forEach((content) => {
          contentArray.push(String(content.value));
        });
        let itemsData = {
          results: result,
          interview_date: date,
          contents: contentArray,
        };
        sendData.items.push(itemsData);
      }
      console.log(sendData);

      registInterview(sendData).then((boolean) => {
        if (boolean) {
          history.push(`/company-detail/${companyId}/interview`);
        }
      });

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
      registEntry(formObj).then((boolean) => {
        if (boolean) {
          history.push(`/company-detail/${companyId}/entry`);
        }
      });
      sendJSON = JSON.stringify(formObj);
    }
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
          <button
            onClick={() => history.goBack()}
            className="header-side__cancel btn"
          >
            キャンセル
          </button>
          <RoundedBtn txt="保存" Func={onSaveHandler} />
        </div>
      )}
    </header>
  );
};

export default HeaderRegister;
