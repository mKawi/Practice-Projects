/*
    Write a loop that makes seven calls to console.log to output the following triangle:
    
    #
    ##
    ###
    ####
    #####
    ######
    #######

    It may be useful to know that you can find the length of a string b writing
    .length after it.
*/

for (let i = 1; i <= 7; i++) {
	let hashtag = '';
	console.log(hashtag.padEnd(i, '#'));
}
