export const getDay = async (date) => {
  const newDate = new Date(date);
  const numberOfDay = newDate.getDay();
  const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const actualDay = days[numberOfDay];
  const splitedDate = await date.split(' ');
  const time = splitedDate[1];
  return { actualDay, time };
};

export const getDayOfWeek = (dateString) => {
  const daysOfWeek = ['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom'];
  const dateObject = new Date(dateString);
  const dayOfWeek = daysOfWeek[dateObject.getDay()];
  return dayOfWeek;
};
