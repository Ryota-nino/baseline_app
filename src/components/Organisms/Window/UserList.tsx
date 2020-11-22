import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../../assets/images/index";

interface Props {
  thisPage: string;
  companyData: any;
}

const UserList: React.FC<Props> = (props) => {
  const [userList, setUserList] = useState<any>();

  useEffect(() => {
    if (props.thisPage === "insert-users") {
      const userArray: object[] = [];
      props.companyData.company_information.forEach((data: any) => {
        const user = {
          id: data.user.id,
          name: data.user.last_name + " " + data.user.first_name,
          desiredOccupations: data.user.desired_occupations,
          graduationYear: data.user.year_of_graduation,
          icon: data.user.icon_image_path,
        };
        userArray.push(user);
      });
      setUserList(userArray);
    }
  }, []);

  let pageTtl, linkTo;
  if (props.thisPage === "insert-users") {
    pageTtl = "情報提供に協力した方";
    linkTo = "company-users";
  } else if (props.thisPage === "company-users") {
    pageTtl = "この会社に就職した方";
    linkTo = "insert-users";
  }

  const renderUserList = () => {
    if (props.thisPage === "insert-users") {
      if (userList) {
        return userList.map((data: any) => {
          return (
            <li className="user-excerpt">
              <Link to={`/user/${data.id}`}>
                <img src={"http://localhost:8000/" + data.icon} alt="" />
                <div className="user-excerpt__wrap">
                  <p className="user-excerpt__name">{data.name}</p>
                  <div>
                    <p className="user-excerpt__year">
                      {data.graduationYear}卒
                    </p>
                    <p className="user-excerpt__job">
                      {data.desiredOccupations}希望
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        });
      }
    }
  };

  return (
    <article className="contentBox userListWindow">
      <h1 className="heading5">{pageTtl}</h1>
      <ul className="userListWindow__list">{renderUserList()}</ul>
      <Link
        className="userListWindow__link"
        to={`/${linkTo}/${props.companyData.id}`}
      >
        さらに表示する
      </Link>
    </article>
  );
};

export default UserList;
