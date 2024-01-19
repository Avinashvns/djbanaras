import { Typography } from "@mui/material";
import { MYCOLOR } from './MyColor'

const Headingtext = ({ name, flexGrow, fontFamily, whiteColor, lineHeight, display, padding, pleft, pright, ptop, pbottom, pX, pY, margin, mleft, mright, mtop, mbottom, mX, mY }) => {
    return (
        <Typography variant="h4" sx={{
            flexGrow: flexGrow == null ? 0 : flexGrow,
            display: display,
            fontFamily: 'Roboto',
            fontWeight: fontFamily == null ? 'normal' : fontFamily,
            color: whiteColor ? MYCOLOR.whitetext : MYCOLOR.blacktext,
            lineHeight: lineHeight,
            margin: margin,
            marginTop: mtop,
            marginBottom: mbottom,
            marginLeft: mleft,
            marginRight: mright,
            marginX: mX,
            marginY: mY,

            padding: padding,
            paddingLeft: pleft,
            paddingRight: pright,
            paddingTop: ptop,
            paddingBottom: pbottom,
            paddingX: pX,
            paddingY: pY,
        }} gutterBottom>
            {name}
        </Typography>
    );
}
const Titletext = ({ name, flexGrow, fontFamily, whiteColor, lineHeight, display, padding, pleft, pright, ptop, pbottom, pX, pY, margin, mleft, mright, mtop, mbottom, mX, mY }) => {
    return (
        <Typography variant="h6" sx={{
            flexGrow: flexGrow == null ? 0 : flexGrow,
            display: display,
            fontFamily: 'Roboto',
            fontWeight: fontFamily == null ? 'normal' : fontFamily,
            color: whiteColor ? MYCOLOR.whitetext : MYCOLOR.blacktext,
            maxLines: 2,
            lineHeight: lineHeight,

            margin: margin,
            marginTop: mtop,
            marginBottom: mbottom,
            marginLeft: mleft,
            marginRight: mright,
            marginX: mX,
            marginY: mY,

            padding: padding,
            paddingLeft: pleft,
            paddingRight: pright,
            paddingTop: ptop,
            paddingBottom: pbottom,
            paddingX: pX,
            paddingY: pY,
        }} gutterBottom>
            {name}
        </Typography>
    );
}

const SubTitletext = ({ name, flexGrow, fontFamily, whiteColor, display, lineHeight, padding, pleft, pright, ptop, pbottom, pX, pY, margin, mleft, mright, mtop, mbottom, mX, mY }) => {
    return (
        <Typography variant="subtitle1" sx={{
            flexGrow: flexGrow == null ? 0 : flexGrow,
            display: display,
            fontFamily: 'Roboto',
            fontWeight: fontFamily == null ? 'normal' : fontFamily,
            color: whiteColor ? MYCOLOR.whitetext : MYCOLOR.blacktext,
            lineHeight: lineHeight,

            // margin
            margin: margin,
            marginTop: mtop,
            marginBottom: mbottom,
            marginLeft: mleft,
            marginRight: mright,
            marginX: mX,
            marginY: mY,

            padding: padding,
            paddingLeft: pleft,
            paddingRight: pright,
            paddingTop: ptop,
            paddingBottom: pbottom,
            paddingX: pX,
            paddingY: pY,
        }} gutterBottom>
            {name}
        </Typography>
    );
}

const Bodytext = ({ name, fontWeight, whiteColor, padding, pleft, pright, ptop, pbottom, pX, pY, margin, mleft, mright, mtop, mbottom, mX, mY }) => {
    return (
        <>
            <Typography variant="body2"
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: { fontWeight },
                    color: whiteColor ? MYCOLOR.whitetext : MYCOLOR.blacktext,
                    margin: margin,
                    marginTop: mtop,
                    marginBottom: mbottom,
                    marginLeft: mleft,
                    marginRight: mright,
                    marginX: mX,
                    marginY: mY,

                    padding: padding,
                    paddingLeft: pleft,
                    paddingRight: pright,
                    paddingTop: ptop,
                    paddingBottom: pbottom,
                    paddingX: pX,
                    paddingY: pY,
                }} gutterBottom>
                {name}
            </Typography>
        </>
    );
}

export { Headingtext, Titletext, SubTitletext, Bodytext };