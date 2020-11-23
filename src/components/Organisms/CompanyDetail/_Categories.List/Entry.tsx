import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PostStudent } from "../../../Molecules/Card/index";
import { Pagenation } from "../../Header/index";
import { showEntry } from "../../../../assets/script/index";
interface Props {
  thisPage: string;
  companyId: any;
  companyData: any;
}

const Entry: React.FC<Props> = (props) => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    out: {
      x: -20,
      opacity: 0,
    },
  };
  const [entries, setEntries] = useState<any>(null);

  useEffect(() => {
    const entriesArray: any = [];
    props.companyData.company_information.forEach((data: any) => {
      data.entries.forEach((entry: any) => {
        if (entry) {
          const entryCard = {
            id: entry.id,
            userName: data.user.last_name + " " + data.user.first_name,
            iconImagePath: data.user.icon_image_path,
            job: data.user.desired_occupations,
            icon: data.user.icon_image_path,
          };
          entriesArray.push(entryCard);
        }
      });
    });
    setEntries(entriesArray);

    showEntry(1).then((data: any) => {
      console.log(data);
    });
  }, []);

  return (
    <motion.div
      className="companyDetail-contents entry"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      {(() => {
        if (entries) {
          return entries.map((data: any) => {
            return (
              <PostStudent
                id={data.id}
                ttl="本選考(22卒)"
                isPass={false}
                job={data.job}
                icon={data.icon}
                userName={data.userName}
              />
            );
          });
        }
      })()}
      {(() => {
        if (entries) {
          if (entries.length !== 0) {
            return <Pagenation />;
          }
        }
      })()}
    </motion.div>
  );
};

export default Entry;
