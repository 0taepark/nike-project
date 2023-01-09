import React from 'react';
import ContentHeader from './components/ContentHeader/ContentHeader';
import ContentNext from './components/ContentNext/ContentNext';
import ContentList from './components/ContentList/ContentList';
import './listContent.scss';

function ListContent({
  products,
  setProducts,
  filterHider,
  setOffset,
  setLimit,
  itemListCount,
  nextHider,
}) {
  return (
    <div
      className="listContent"
      style={filterHider !== true ? { marginLeft: 0 } : null}
    >
      <ContentHeader />
      <ContentList products={products} itemListCount={itemListCount} />

      <ContentNext
        products={products}
        setProducts={setProducts}
        setOffset={setOffset}
        setLimit={setLimit}
      />
    </div>
  );
}

export default ListContent;
