const color = {
    background: "#009",
    title: "#f00",
    subtitle: "#0f0",
    normal: "#222"
};
const size = {
    title: 23,
    subtitle: 18,
    normal: 16
};
const mainView = {
    backgroundColor: color.background,
    flex: 1,
    alignItems: "center"
};
const title = {
    color: color.title,
    fontSize: size.title
};
const subtitle = {
    color: color.subtitle,
    fontSize: size.subtitle
};
const inputContainer = {
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: "green",
    padding: 30
};
const addButton = {
    backgroundColor: "grey", padding: 10, width: 100, alignItems: "center", justifyContent: "center"
};
const todo = {
    marginTop: 10,
    backgroundColor: "pink",
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch"
};
const removeButton = {
    padding: 10,
    backgroundColor: "red",
    alignItems: "center", justifyContent: "center"
};
const nmaviagateButton = {
    padding: 10,
    backgroundColor: "yellow",
    alignItems: "center", justifyContent: "center"
};

const styles = {
    mainView,
    title,
    subtitle,
    inputContainer,
    todo,
    removeButton,
    addButton,
    nmaviagateButton
}
export default styles; 