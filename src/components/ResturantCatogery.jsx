import { Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemList from "./ItemList";

const ResturantCatogery = ({ data, expanded, onChange }) => {
    // console.log(`${expanded} and ${index}`, "expanded");

    // const [showItems, setshowItems] = useState(true)
    // const handleClick = () => {
    //     setshowItems(!showItems)
    // }

    return (
        <Accordion
            expanded={expanded}
            onChange={onChange}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">{data?.title}{" "}({data?.itemCards.length})</Typography>
            </AccordionSummary>

            {expanded && <ItemList items={data.itemCards} />}

        </Accordion>
    )
}

export default ResturantCatogery;