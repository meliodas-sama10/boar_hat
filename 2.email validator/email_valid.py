email=input('enter ur email: ')
if(len(email)>=6):
    if(email[0].isalpha()) and (email[0].islower()):
        if ('@' in email) and (email.count('@')==1):
            if(email[-4]=='.')or(email[-3]=='.') and (email.count('.')==1):
                if('.com'in email)or('.in'in email):
                    valid = True
                    allow=set('@._')
                    for i in email:
                        if i.isspace() or i.isupper() or (not i.isalnum() and i not in allow):
                            valid = False
                            print('Email should not contain any spaces, uppercase letters, or special characters other than @ and .')
                            break
                    if valid:
                        print('Email is correct. You can continue.')
                    
                else:
                    print('Email should contain .com or .in')
            else:
                print('Email should contain "." only one time')
        else:
            print('Email should contain "@" atleast and only one time ')
    else:
        print('Email should be start with only a smaller case')         
else:
    print('Enter the correct email')
