import { Item, Order } from './index';
import * as sinon from 'sinon';

it('spy', () => {
  const order = new Order();
  const item = new Item(100);
  const spy = sinon.spy(item, 'calculateDiscount');

  order.add(item);
  order.add(item);
  order.pay(new Date(), 20);

  expect(spy.withArgs(20).calledTwice).toBe(true);
  expect(order.getPayment()).toBe(160); 
});

it('stub', () => {
  const order = new Order();
  const item = new Item();
  const stub = sinon.stub(item, 'calculateDiscount');

  stub.onCall(0).returns(70);
  stub.onCall(1).returns(80);

  order.add(item);
  order.add(item);
  order.pay(new Date(), 20);

  expect(stub.withArgs(20).calledTwice).toBe(true);
  expect(order.getPayment()).toBe(150); 
});

it('mock', () => {
  const order = new Order();
  const item = new Item();
  const mock = sinon.mock(item);

  mock.expects('calculateDiscount').twice().returns(90);

  order.add(item);
  order.add(item);
  order.pay(new Date(), 10);

  mock.verify();

  expect(order.getPayment()).toBe(180);
});

describe('fake', () => {
  let clock: any;
  
  beforeEach(() => {
    // 2018/04/01 09:15
    clock = sinon.useFakeTimers(1522541700000);
  });

  afterEach(() => {
    clock.restore();
  });

  it('paid', () => {
    const order = new Order();
    order.add(new Item(100));
    order.pay(new Date());

    expect(order.receipt()).toBe('2018/4 100円');
  });
});
