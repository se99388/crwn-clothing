import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

//it will be called as: selectIsCollectionFetching(state)
const mapStatetoProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});
const CollectionOverviewContainer = compose(
  connect(mapStatetoProps),
  WithSpinner
)(CollectionsOverview);

//line 12 it is exactly the same as this:
// const CollectionOverviewContainer = connect(mapStatetoProps)(WithSpinner(CollectionsOverview));

export default CollectionOverviewContainer;
