export default async (req, res, next) => {
    const t0 = performance.now();   
    
    if (req.method === 'GET') {
        const tf = performance.now();
        res.status(210).json({ isValid: true, time: tf - t0 });
    }    
}