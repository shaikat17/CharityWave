export const dateInfo = (createdAt) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const today = new Date();
    const publishingDate = new Date(createdAt)
    const differenceDays = today.getTime() - publishingDate.getTime();
    let daysAgo = differenceDays / (1000 * 3600 * 24);
    const monthName = monthNames[publishingDate.getMonth()];
    const date = publishingDate.getDay()
    return ([daysAgo, monthName, date])
  }