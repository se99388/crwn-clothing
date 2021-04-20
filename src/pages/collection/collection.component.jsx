import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
//The second param is the props of the current wrapped component
const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params;
  //the first envoke return the function that createSelector() return. This returned function has to get the state as a param. This is the second envoke - with (state)
  return { collection: selectCollection(collectionId)(state) };
};

export default connect(mapStateToProps)(CollectionPage);
