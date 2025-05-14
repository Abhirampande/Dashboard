import {Box, useTheme} from "@mui/material";
import Header from "../../components/Header";
import {tokens} from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box m ="20px">
            <Header tittle ="FAQ" subtitle={"Frequently Asked Questions"}></Header>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    NeedFull Doubts
                </Typography>

                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        issue with the needfull
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Required Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        issue with the required
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Required Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        issue with the required
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Important Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        issue with the problems
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
};

export default FAQ;


