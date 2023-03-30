import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ALSubSelectionTest from './components/testsQuestions/ALSubSelection'
import CareerSelection from './components/testsQuestions/CareerSelection'
import VocationalTrainingSelectionTest from './components/testsQuestions/VocationalTrainingSelection'
import OLSubSelectionTest from './components/testsQuestions/OLSubSelection'
import HigherEducationSelection from './components/testsQuestions/HigherEducationSelection'
import JobCategoriesPage from './components/home/job_categories'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
           <Route path="/alSubSelectionTest" element={<ALSubSelectionTest />} />
           <Route path="/careerSelectionTest" element={<CareerSelection />} />
           <Route path="/vocationalTrainingSelectionTest" element={<VocationalTrainingSelectionTest />} />
           <Route path="/olSubSelectionTest" element={<OLSubSelectionTest />} />
           <Route path="/higherEducationSelectionTest" element={<HigherEducationSelection />} />
           <Route path="/jobCategoriesPage" element={<JobCategoriesPage />} />

           
          {/*<Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
