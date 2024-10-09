import { Collapse, Checkbox, Input } from 'antd';
const { Panel } = Collapse;

const FilterSection = () => {
  return (
    <section className="w-full col-span-full md:col-span-3">
      {/* Price Filter */}
     <div className="shadow-md rounded-lg">
     <Collapse defaultActiveKey={['1', '2', '3', '4']} expandIconPosition="right" ghost>
        <Panel header={<h1 className="text-xl">Price Filters</h1>} key="1">
          <Input
            placeholder="Price Filter"
            type="text"
            className="w-full border-gray-300 px-3 py-2 border rounded outline-none"
          />
        </Panel>
        <hr />
        {/* Product Categories */}
        <Panel header={<h1 className="text-xl">Product Categories</h1>} key="2">
          <div className="space-y-2">
            {[
              { name: "Apparel", count: 10214 },
              { name: "Bedding", count: 110 },
              { name: "Electronics", count: 110 },
              { name: "Furniture", count: 1210 },
              { name: "Kitchen Product", count: 1120 },
              { name: "Bathroom Products", count: 110 },
              { name: "Shoes", count: 141 },
              { name: "Outdoor Products", count: 1140 },
              { name: "Seasonal Products", count: 550 },
            ].map((category) => (
              <div className="flex justify-between items-center" key={category.name}>
                <Checkbox>{category.name}</Checkbox>
                <span className="text-gray-500">{category.count}</span>
              </div>
            ))}
          </div>
        </Panel>
        <hr />
        {/* Collection */}
        <Panel header={<h1 className="text-xl">Collection</h1>} key="3">
          <div className="space-y-2">
            {["Sofa", "Chair", "Lamp Table", "Bed", "Living Bed", "Top", "Shoes"].map(
              (collection) => (
                <div className="flex items-center space-x-2" key={collection}>
                  <Checkbox>{collection}</Checkbox>
                </div>
              )
            )}
          </div>
        </Panel>
        <hr />
        {/* Availability */}
        <Panel header={<h1 className="text-xl">Availability</h1>} key="4">
          <div className="space-y-2">
            {["In Stock", "Not Available"].map((status) => (
              <div className="flex items-center space-x-2" key={status}>
                <Checkbox>{status}</Checkbox>
              </div>
            ))}
          </div>
        </Panel>
      </Collapse>
     </div>
    </section>
  );
};

export default FilterSection;
