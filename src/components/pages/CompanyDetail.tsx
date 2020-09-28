import React from 'react';
import {UserListWindow} from '../user';
import {CompanyContentsWindow,CompanyBar} from '../company';

interface Props {
  thisPage: string;
}

const CompanyDetail:React.FC<Props> = props => {
  return (
    <section className="app-main company-detail">
        <div className="left-col">
            <CompanyBar hasActionBtn={true} />
            <CompanyContentsWindow thisPage={props.thisPage}/>
        </div>
        <div className="right-col">
            <UserListWindow />
            <UserListWindow />
        </div>
    </section>
  );
}

export default CompanyDetail;
