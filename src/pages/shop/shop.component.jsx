import { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart();
  },[]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};
export default connect(null, mapDispatchToProps)(ShopPage);
