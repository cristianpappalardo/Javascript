# Abracadabra exercise

## Solution 1

* In the first solution I used different methods but very similar in a way. The first time I used the split method and string concatenation. I split the string from its start to the index(excluded), concatenate it to the new character used for replacing and concatenate it again from the character after the index until the end of the string. 

* The second time I used the replace method and the RegExp object. In this version, I rely on a regular expression to locate the character that needs to be replaced. The idea is to build a pattern that matches:

    All characters before the target index, and

    The character at the target index itself.

    To achieve this, I construct a dynamic regular expression using a template literal:

    const regex = new RegExp(`(.{${index}}).`);
    This pattern breaks down as follows:

    .{${index}}  
    Matches exactly index characters.
    For example, if index = 3, this becomes .{3}, which matches the first three characters of the string.

    ( ... )  
    The parentheses wrap that part in a capturing group, so we can reuse it later in the replacement.

    The final .  
    Matches one more character — specifically, the character at the position we want to replace.

    So for a string like "Abracadabra" and index = 3, the regex becomes:

    Codice
    (.{3}).
    This matches:

    "Abr" → captured as $1

    "a" → the character at index 3 (not captured)

    The full matched substring is "Abra".

    Once the regex has matched the correct portion of the string, I use the replace method to rebuild it:

    return str.replace(regex, `$1${newChar}`);
    Here:

    $1 inserts the captured part (everything before the target character)

    ${newChar} inserts the replacement character

    The original character at that index is discarded because it was matched but not included in the replacement

    This produces the desired result: only the character at the specified index is replaced, while the rest of the string remains unchanged.

* The third time I used the replace method and a simple regular expression to find the first occurence of the 'a' character in the string and replace it with a new character. 

## Solution 2





## Solution 3
