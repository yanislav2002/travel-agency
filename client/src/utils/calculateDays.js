export default function calculateDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const timeDifference = end - start;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;

    return daysDifference;
}


