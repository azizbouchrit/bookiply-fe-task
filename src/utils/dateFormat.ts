export const formatDate = (unformattedDate: string) => {
  const date = new Date(unformattedDate);
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = date.getDate();

  let monthName = monthNames[date.getMonth()];

  let year = date.getFullYear();

  return `${day} ${monthName} ${year}`;
};
