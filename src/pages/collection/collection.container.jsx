import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

//why we wrote it like this: (state) => !selectIsCollectionsLoaded(state)?
//it is because when we write "selectIsCollectionsLoaded" redux use it as reference function or a cb function and call it like that: "selectIsCollectionsLoaded(state)"
//but here we want to convert the result returned from this function. So we can't write "!selectIsCollectionsLoaded" because redux will take it as a param of  "!selectIsCollectionsLoaded"  and this is not a function and not a reference function. so it has to be like a callback: (state)=>!selectIsCollectionsLoaded(state). Now redux can take it as a refernce and call it(as a callback that we always pass as a param). it will call it ((state)=>!selectIsCollectionsLoaded(state))(state)
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
