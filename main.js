//========= Ex1 ============

// const listArr = ['Opel', 'Bmw', 'Seat', 'Toyota', 'Audi', 'Cadilac']
// const vocLatter = ['a', 'e', 'i', 'o', 'u']

// const vocWords = listArr.reduce((acc, curr) => {
// 	if(vocLatter.includes(curr[0].toLowerCase())) acc.push(curr)

// 		return acc
// },[])


// const consWords = listArr.reduce((acc, curr) => {
// 	if(!vocLatter.includes(curr[0].toLowerCase())) acc.push(curr)

// 		return acc
// },[])


// const vocWordsLastLett = listArr.reduce((acc, curr) => {
// 	if(vocLatter.includes(curr[curr.length - 1].toLowerCase())) acc.push(curr)

// 		return acc
// },[])


// const consWordsLastLett = listArr.reduce((acc, curr) => {
// 	if(!vocLatter.includes(curr[curr.length - 1].toLowerCase())) acc.push(curr)

// 		return acc
// },[])


// console.log(vocWords)
// console.log(consWords)
// console.log(vocWordsLastLett)
// console.log(consWordsLastLett)

//=========== Ex2 ==========

// const listArr = ['Opel', 'Bmw', 'Seat', 'Toyota', 'Audi', 'Cadilac']
// const vocLatter = ['a', 'e', 'i', 'o', 'u']

// const concatLists = (list1, list2 , k) => {
// 	const validStrings = list1.some(item => typeof item !== 'string') || list2.some(item => typeof item !== 'string')
	
// 	if(validStrings) return `please use only strings`
// 	if(vocLatter.length < k) return `number is higher them arr length`
	
// 	const concatResult = list2.reduce((acc, curr, index) => {
// 		if (index < k) acc.push(curr)

// 		return acc
// 	}, [])

// 	return [...list1, ...concatResult]
// }

// console.log(concatLists(listArr, vocLatter, 7))

//============ Ex3 =============

// const workers = [
// 	{
// 		name: 'Ion',
// 		age: 17
// 	},
// 	{
// 		name: 'Vasile',
// 		age: 20
// 	},
// 	{
// 		name: 'Artur',
// 		age: 44
// 	},
// 	{
// 		name: 'Ana',
// 		age: 39
// 	},
// 	{
// 		name: 'Maxim',
// 		age: 50
// 	}
// ]

// const validAge = (list) => {
// 	return list.reduce((acc, curr) => {
// 		if(curr.age >= 20 && curr.age <= 40) acc.push(curr)
// 			return acc
// 	}, [])
// }
// const validAge50 = (list) => {
// 	return list.reduce((acc, curr) => {
// 		if(curr.age >= 50) acc.push(curr)
// 			return acc
// 	}, [])
// }

// console.log(validAge(workers))
// console.log(validAge50(workers))

//============ Ex4 =============

// const listArr = ['Opel', 'Bmw', 'Seat', 'Toyota', 'Audi', 'Cadilac']

// const showArr = (list, order) => {
// 	list.reduce((acc, curr, index) => {
// 		const elemIdx = order === 'ASC' ? index : list.length - 1 - index
// 		console.log(list[elemIdx])
// 	},0)
// }

// showArr(listArr, 'ASC')
// showArr(listArr, 'DSC')


