export const keyData = [
  {
    id: 1,
    row: [
      {
        id: 1.1,
        keyId: "clear",
        text: "AC",
        col: 2,
        btnClass: "bg-rose-600",
        dispatch: "CLEAR"
      },
      {
        id: 1.2,
        keyId: "divide",
        text: "/",
        btnClass: "bg-gray-700",
        dispatch: "CHOOSE_OPERATION"
      },
      {
        id: 1.3,
        keyId: "multiply",
        text: "*",
        btnClass: "bg-gray-700",
        dispatch: "CHOOSE_OPERATION"
      },
    ],
  },
  {
    id: 2,
    row: [
      {
        id: 2.1,
        keyId: "seven",
        text: "7",
        dispatch: "ADD_DIGIT"
      },
      {
        id: 2.2,
        keyId: "eight",
        text: "8",
        dispatch: "ADD_DIGIT"
      },
      {
        id: 2.3,
        keyId: "nine",
        text: "9",
        dispatch: "ADD_DIGIT"
      },
      {
        id: 2.4,
        keyId: "subtract",
        text: "-",
        btnClass: "bg-gray-700",
        dispatch: "CHOOSE_OPERATION"
      },
    ],
  },
  {
    id: 3,
    row: [
      {
        id: 3.1,
        keyId: "four",
        text: "4",
        dispatch: "ADD_DIGIT"
      },
      {
        id: 3.2,
        keyId: "five",
        text: "5",
        dispatch: "ADD_DIGIT"
      },
      {
        id: 3.3,
        keyId: "six",
        text: "6",
        dispatch: "ADD_DIGIT"
      },
      {
        id: 3.4,
        keyId: "add",
        text: "+",
        btnClass: "bg-gray-700",
        dispatch: "CHOOSE_OPERATION"
      },
    ],
  },
  {
    id: 4,
    row: [
      {
        id: 4.1,
        keyId: "one",
        text: "1",
        dispatch: "ADD_DIGIT",
      },
      {
        id: 4.2,
        keyId: "two",
        text: "2",
        dispatch: "ADD_DIGIT"
      },
      {
        id: 4.3,
        keyId: "three",
        text: "3",
        dispatch: "ADD_DIGIT"
      },
      {
        id: 4.4,
        keyId: "equals",
        text: "=",
        row: 2,
        btnClass: "bg-lightBlue-800",
        dispatch: "EVALUATE"
      },
    ],
  },
  {
    id: 5,
    row: [
      {
        id: 5.1,
        keyId: "zero",
        text: 0,
        col: 2,
        dispatch: "ADD_DIGIT"
      },
      {
        id: 5.2,
        keyId: "decimal",
        text: ".",
        dispatch: "ADD_DIGIT"
      },
    ],
  },
];
