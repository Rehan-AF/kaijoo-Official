import { Button, withStyles } from "@material-ui/core";
const CustomButton = withStyles(() => ({
  root: {
    background:
      "transparent linear-gradient(180deg, #FF9315 0%, #FF6600 100%) 0% 0% no-repeat padding-box",
    boxShadow: "inset 0px 3px 6px #00000029",
    borderRadius: "12px",
    color: "#FFFFFF",
    fontWeight: "800",
    textTransform: "capitalize",
    padding: "5px 13px",
    fontSize: "16px",
  },
  primary: {
    background:
      "transparent linear-gradient(180deg, #5AA0FFF7 0%, #006CFF 100%) 0% 0% no-repeat padding-box",
    borderRadius: "26px",
    padding: "30px 70px",
    width: "200px",
    marginTop: "20px",
  },
}))(Button);
export default CustomButton;