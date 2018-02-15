require('chai').should();

const sinon = require('sinon');
const request = require('supertest');

const app = require('../../app');
const config = require('konfig')({path: 'config'});
const service = require('../../lib/services/example-service');

const sandbox = sinon.createSandbox();

describe('controllers/example', () => {
  let mock;

  let basePath = config.app.microservice.server.name;

  let examples = [{
    'id': 1,
    'name': 'bands'
  }, {
    'id': 2,
    'name': 'concerts'
  }];

  beforeEach(() => {
    mock = sandbox.mock(service);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return a list of Examples when GET /example is requested', () => {
    return request(app)
      .get('/' + basePath + '/example')
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        response.body[0].id.should.equal(1);
        response.body[0].name.should.equal('movies');
        response.body[1].id.should.equal(2);
        response.body[1].name.should.equal('shows');
      })
      .catch((err) => {
        console.log(err);
      });
  });

  it('should return a list of mocked Examples when GET /example is requested', () => {
    mock.expects('getExamples').resolves(examples);

    return request(app)
      .get('/' + basePath + '/example')
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        response.body[0].id.should.equal(1);
        response.body[0].name.should.equal('bands');
        response.body[1].id.should.equal(2);
        response.body[1].name.should.equal('concerts');
      })
      .catch((err) => {
        console.log(err);
      });
  });

  it('should return a Error when GET /example/error is requested', () => {
    return request(app)
      .get('/' + basePath + '/example/error')
      .set('Accept', 'application/json')
      .expect(404);
  });

  it('should return a ResourceNotFoundError when GET /example with a bad sub-uri', () => {
    mock.expects('getExamples').resolves();

    return request(app)
      .get('/' + basePath + '/example/bad')
      .set('Accept', 'application/json')
      .expect(404);
  });

  it('should return a Bad Request response when GET /example results in underlying service exception', () => {
    mock.expects('getExamples').rejects('CustomError');

    return request(app)
      .get('/' + basePath + '/example')
      .set('Accept', 'application/json')
      .expect(500);
  });

});
