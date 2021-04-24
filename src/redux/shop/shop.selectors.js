import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections) => (collections ? Object.values(collections) : [])
);

//memoize makes sure to execute the selectCollection function only if the collectionUrlParam changes
export const selectCollection = memoize((collectionUrlParam) => {
  // console.log(`selectCollection is fired - ${collectionUrlParam}`);
  return createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
});

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)


