import { format, parseISO } from "date-fns";
import { Date as PrismicDate } from "prismic-reactjs";
import brazilLocale from "date-fns/locale/pt";
export default function Date({ dateString }) {
  
 
  if (dateString) {
    const parseDate = parseISO(dateString);

    const formattedDate = format(parseDate, "dd 'de' MMMM, yyyy", {locale: brazilLocale});
    return <time className=""dateTime={formattedDate}>{formattedDate}</time>;
  }
  return false;
}
