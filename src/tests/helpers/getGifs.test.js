import { getGifs } from "../../helpers/getGifs"

describe('test on getGifs', () => {
    
    test('should get 5 elements', async() => {
        
        const gifs = await getGifs('a');

        expect(gifs.length).toBe(5);
        
    })
        
})
