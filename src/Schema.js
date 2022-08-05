import * as Yup from "yup";

// Creating schema
export const schema = Yup.object().shape({
  mealName: Yup.string().required("MealName is a required field"),
  days: Yup.array().of(
    Yup.object().shape({
      sunday: Yup.array().of(
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        })
      ),
      monday: Yup.array().of(
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        })
      ),
      tuesday: Yup.array().of(
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        })
      ),
      wednesday: Yup.array().of(
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        })
      ),
      thursday: Yup.array().of(
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        })
      ),
      friday: Yup.array().of(
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        })
      ),
      saturday: Yup.array().of(
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        }),
        Yup.object().shape({
          time: Yup.string().required("Write the time of meal"),
          meal: Yup.string().required("Write the name of meal"),
        })
      ),
    })
  ),
});

export const initialValues = [
  {
    sunday: [
      {
        time: "8:00am",
        meal: "meal_1_K",
      },
      {
        time: "12:00pm",
        meal: "meal_2_K",
      },
      {
        time: "3:00pm",
        meal: "meal_3_K",
      },
      {
        time: "8:00pm",
        meal: "meal_4_K",
      },
      {
        time: "10:00pm",
        meal: "meal_5_K",
      },
    ],
  },
  {
    monday: [
      {
        time: "8:00am",
        meal: "meal_10_K",
      },
      {
        time: "12:00pm",
        meal: "meal_11_K",
      },
      {
        time: "3:00pm",
        meal: "meal_12_K",
      },
      {
        time: "8:00pm",
        meal: "meal_13_K",
      },
      {
        time: "10:00pm",
        meal: "meal_14_K",
      },
    ],
  },
  {
    tuesday: [
      {
        time: "8:00am",
        meal: "meal_20_K",
      },
      {
        time: "12:00pm",
        meal: "meal_21_K",
      },
      {
        time: "3:00pm",
        meal: "meal_22_K",
      },
      {
        time: "8:00pm",
        meal: "meal_23_K",
      },
      {
        time: "10:00pm",
        meal: "meal_24_K",
      },
    ],
  },
  {
    wednesday: [
      {
        time: "8:00am",
        meal: "meal_30_K",
      },
      {
        time: "12:00pm",
        meal: "meal_31_K",
      },
      {
        time: "3:00pm",
        meal: "meal_32_K",
      },
      {
        time: "8:00pm",
        meal: "meal_33_K",
      },
      {
        time: "10:00pm",
        meal: "meal_34_K",
      },
    ],
  },
  {
    thursday: [
      {
        time: "8:00am",
        meal: "meal_40_K",
      },
      {
        time: "12:00pm",
        meal: "meal_41_K",
      },
      {
        time: "3:00pm",
        meal: "meal_42_K",
      },
      {
        time: "8:00pm",
        meal: "meal_43_K",
      },
      {
        time: "10:00pm",
        meal: "meal_44_K",
      },
    ],
  },
  {
    friday: [
      {
        time: "8:00am",
        meal: "meal_50_K",
      },
      {
        time: "12:00pm",
        meal: "meal_51_K",
      },
      {
        time: "3:00pm",
        meal: "meal_52_K",
      },
      {
        time: "8:00pm",
        meal: "meal_53_K",
      },
      {
        time: "10:00pm",
        meal: "meal_54_K",
      },
    ],
  },
  {
    saturday: [
      {
        time: "8:00am",
        meal: "meal_60_K",
      },
      {
        time: "12:00pm",
        meal: "meal_61_K",
      },
      {
        time: "3:00pm",
        meal: "meal_62_K",
      },
      {
        time: "8:00pm",
        meal: "meal_63_K",
      },
      {
        time: "10:00pm",
        meal: "meal_64_K",
      },
    ],
  },
];
