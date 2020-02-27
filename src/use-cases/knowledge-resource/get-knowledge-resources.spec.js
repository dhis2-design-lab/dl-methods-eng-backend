const { 
    getAllKnowledgeResources, 
    createOneKnowledgeResource, 
    getByIDKnowledgeResources
    } = require('./index')
const makeFakeKnowledgeResource = require('../../../__test__/fixtures/knowledge-resource')

describe('knowledge resources use cases', () => {
    it('should get all knowledge resources', async (done) => {
        const payload = makeFakeKnowledgeResource()

        createOneKnowledgeResource(payload)
            .then(async () => {
                const knowledgeResources = await getAllKnowledgeResources()
        
                expect(knowledgeResources.length > 0).toBe((true))
                done()

            })
    })


    it('should get knowledge resource by id', async (done) => {
        const payload = makeFakeKnowledgeResource()
        createOneKnowledgeResource(payload)
            .then(async (data) => {
                const {dataValues:{id}, dataValues} = data

                const knowledgeResource = await getByIDKnowledgeResources(id)
                
                expect(dataValues).toStrictEqual((knowledgeResource.dataValues))
                done()

            })
    })

    it.todo('query knowledge resources')

    it.todo('should delete knowledge resource')
});
