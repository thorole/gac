import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MainBoard from "../../components/MainBoard/MainBoard";

import { fakeData } from "../../services/individuals";
import { fakeCompanies } from "../../services/companies";

import styles from "./Homepage.module.css";

const Homepage = () => {
  const [individualsData] = useState(fakeData());
  const [companiesData] = useState(fakeCompanies());
  const [currentUser] = useState("Elsa Andersen");

  const [individuals] = useState([
    { label: "", amount: 0 },
    { label: "Jun'19", amount: 9 },
    { label: "Jul'19", amount: 3 },
    { label: "Aug'19", amount: 6 },
    { label: "Sep'19", amount: 4 },
    { label: "Oct'19", amount: 4 },
    { label: "Nov'19", amount: 3 },
    { label: "Dec'19", amount: 9 },
    { label: "", amount: 8 },

  ]);

  const [companies] = useState([
    { label: "", amount: 0 },
    { label: "Jun'19", amount: 6 },
    { label: "Jul'19", amount: 4 },
    { label: "Aug'19", amount: 9 },
    { label: "Sep'19", amount: 7 },
    { label: "Oct'19", amount: 4 },
    { label: "Nov'19", amount: 5 },
    { label: "Dec'19", amount: 8 },
    { label: "", amount: 5 },
  ]);

  const [doughnut] = useState({
    data: [364, 284],
    labels: ["Companies", "Individuals"],
  });

  const [h_currentPage, setH_currentPage] = useState(1);
  const [v_current, setV_current] = useState(1);
  const [header_info] = useState({
    totalSignups: 648,
    lastWeek: 12,
    totalInvestments: 102,
    currency: "NOK",
    value: "345,565",
    totalExits: 23,
  });
  const [header_select] = useState([
    { id: 1, name: "Overview1" },
    { id: 2, name: "Overview2" },
    { id: 3, name: "Overview3" },
  ]);
  const [header_displayed] = useState("Overview");
  const [sort_displayed_gender, setSort_displayed_gender] = useState("Gender");
  const [sort_displayed_type, setSort_displayed_type] = useState("Type");
  const [sort_displayed_value, setSort_displayed_value] = useState("102");
  const [anti_loop, setAnti_loop] = useState(false);

  useEffect(() => {
    sort_handleDisplayedValue();
  }, );

  const h_handlePageChange = (page) => {
    setH_currentPage(page);
  };

  const v_handlePageChange = (icon_id) => {
    setV_current(icon_id);
  };

  const handleDoughnutLenght = () => {
    let length = doughnut.data.reduce((a, b) => {
      return a + b;
    });

    return length;
  };

  const sort_handleDisplayedValue = () => {
    let displayedGender = sort_displayed_gender;
    let displayedType = sort_displayed_type;
    let antiLoop = anti_loop;
    const companies = [...companiesData];
    const individuals = [...individualsData];

    if (displayedGender && displayedType && antiLoop) {
      setAnti_loop(false);
      if (displayedType === "Companies") {
        let filtered = companies.filter(
          (c) => c.gender.toUpperCase() === displayedGender.toUpperCase()
        );
        let output = filtered.length;

        setSort_displayed_value(output);
      } else if (displayedType === "Individuals") {
        let filtered = individuals.filter(
          (c) => c.gender.toUpperCase() === displayedGender.toUpperCase()
        );
        let output = filtered.length;

        setSort_displayed_value(output);
      }
    }
  };

  const sort_handleClickGender = (displayedGender, displayedId) => {
    setSort_displayed_gender(displayedGender);
    setAnti_loop(true);
  };

  const sort_handleClickType = (displayedType, displayedId) => {
    setSort_displayed_type(displayedType);
    setAnti_loop(true);
  };

  return (
    <div className={styles.wrapper}>
      <Navbar user={currentUser} />
      <Header headerInfo={header_info} dropdownData={header_select} displayed={header_displayed} />
      <MainBoard
        individualsData={individualsData}
        companiesData={companiesData}
        individuals={individuals}
        companies={companies}
        doughnut={doughnut}
        sort_displayed_gender={sort_displayed_gender}
        sort_displayed_type={sort_displayed_type}
        sort_displayed_value={sort_displayed_value}
        v_current={v_current}
        v_onPageChange={v_handlePageChange}
        h_currentPage={h_currentPage}
        h_onPageChange={h_handlePageChange}
        onDoughnutLenght={handleDoughnutLenght}
        sort_handleClickGender={sort_handleClickGender}
        sort_handleClickType={sort_handleClickType}
      />
    </div>
  );
};

export default Homepage;
