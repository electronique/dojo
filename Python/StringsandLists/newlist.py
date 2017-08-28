x = [19,2,54,-2,7,12,98,32,10,-3,6]
newlist = []
newlist2 = []
newlist3 = []


sorted = x.sort()

sortsplit = len(x)/2;
count = 0
count2 = len(x)-sortsplit

while count < len(x):

    if count < sortsplit:
        newlist.append(x[count])
        
    #x.append(newlist)
 
    else:
        newlist2.append(x[count])
    count += 1
newlist3.append(newlist)


for xval in newlist2:
    newlist3.append(xval)

   # print xval
#print newlist
#print newlist2
print newlist3