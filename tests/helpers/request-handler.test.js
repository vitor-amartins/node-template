const httpMocks = require('node-mocks-http');
const requestHandler = require('./../../helpers/request-handler');

describe('Request Handler Middleware -> Processing responses', () => {
  it('When 200 and have data, expect call res.json and res with data key ', () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    res.locals = {
      data: 'Test data',
    };

    requestHandler(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ data: 'Test data' });
  });
});
