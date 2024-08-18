import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Dashboard/Home";
import Teachers from "../../pages/Dashboard/Teachers";
import CreateTeacher from "../../pages/Dashboard/CreateTeacher";
import Added from "../../pages/Dashboard/Added";
import SingpleTeacher from "../../pages/Dashboard/SingpleTeacher";
import {
  Students,
  Billing,
  SettingsProfile,
  Exams,
  Features,
} from "../../pages/Dashboard";
import NotFound from "../../pages/Dashboard/NotFound";

function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/teachers/create-teacher" element={<CreateTeacher />} />
      <Route path="/added" element={<Added />} />
      <Route path="/singple-teacher" element={<SingpleTeacher />} />
      <Route path="/students" element={<Students />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/settings-profile" element={<SettingsProfile />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/features" element={<Features />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default index;
