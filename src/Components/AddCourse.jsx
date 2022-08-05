// import { React } from "react";
// import { Formik, FieldArray, Form } from "formik";
// import { schema } from "../Data";
// import { useNavigate, useLocation } from "react-router-dom";
// import { InputField } from "./InputField";
// import {initialValues} from "../Data"

// export const AddCourse = () => {
//   const navigate = useNavigate();
//   //   const location = useLocation();
//   return (
//     <>
//       {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
//       <Formik
//         autocomplete="off"
//         validationSchema={schema}
//         initialValues={{
//           mealName: "",
//           days: initialValues,
//         }}
//         onSubmit={(values) => {
//           //   navigate("/");
//           console.log(values);
//         }}
//       >
//           <div className="mx-auto w-50 mt-4">
//             <>
//               <button className="btn btn-light" onClick={() => navigate("/")}>
//                 Go back
//               </button>
//               <h2 className="text-center mb-3">Add Course</h2>
//                 {/* Field Array for days to add meals and time for each meal */}

//                 {({ values, setFieldValue,handleSubmit,errors,touched,handleChange,handleBlur}) => (
//                   <Form autoComplete="off">
//                     {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//                     <label
//                     style={{
//                         color: "#636363",
//                         fontWeight: "bold",
//                         fontSize: "16px",
//                         margin: "3px 0",
//                     }}
//                     >
//                     MealName:
//                     </label>
//                     <input
//                     type="text"
//                     name="mealName"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.mealName}
//                     placeholder="Enter mealName"
//                     className="form-control inp_text"
//                     id="mealName"
//                     />
//                     {/* If validation is not passed show errors */}
//                     <p className="text-danger">
//                     {errors.mealName && touched.mealName && errors.mealName}
//                     </p>
//                     {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//                     <label
//                     style={{
//                         color: "#636363",
//                         fontWeight: "bold",
//                         fontSize: "16px",
//                         margin: "3px 0",
//                     }}
//                     >
//                     Days:
//                     </label>
//                     <FieldArray
//                       name="course"
//                       render={(arrayHelpers) => {
//                         const course = values.course;
//                         return (
//                           <div>
//                             {course.map((cor, index) => (
//                             <div key={index} className="row mx-2">
//                               <div className="d-flex justify-content-end">
//                                 <button
//                                   type="button"
//                                   style={{
//                                     border: "1px solid #636363",
//                                     borderRadius: "5px",
//                                   }}
//                                   onClick={() => arrayHelpers.remove(index)}
//                                 >
//                                   X
//                                 </button>
//                               </div>
//                               <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <InputField
//                                   title="sunday:"
//                                   value="Sunday"
//                                   placeholder="Sunday"
//                                   name={`course.${index}.sunday`}
//                                 />
//                               </div>

//                               <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <InputField
//                                   title=" time:"
//                                   placeholder="time"
//                                   name={`course.${index}.time`}
//                                 />
//                               </div>
//                               <div className="col-lg-4 col-md-6 col-sm-12">
//                                 <InputField
//                                   title="mealName:"
//                                   placeholder="mealName"
//                                   name={`course.${index}.meal`}
//                                 />
//                               </div>
//                           </div>
//                         )}
//                     />
//                   </Form>

//                 {/* Click on submit button to submit the form */}
//                 <div className=" d-flex justify-content-center">
//                   <button type="submit" className="btn btn-dark">
//                     Submit
//                   </button>
//                 </div>
//                   )}
//             </>
//           </div>
//       </Formik>
//     </>
//   );
// };
