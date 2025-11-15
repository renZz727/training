export function validEmails(email: string) : boolean {
    const parts = email.split('@');
    const [local, domain] = parts;
    const spaces = email.split(' ');
    if(parts.length !== 2 || !local || !domain ||domain.indexOf('.') === -1 || spaces.length > 1 ) return false;
    if(local.startsWith('.') || local.endsWith('.') || domain.startsWith('.') || domain.endsWith('.')) return false;
    for(let i = 1;i < email.length; i++) {
        if(email[i] === '.' && email[i - 1] === '.') return false;
    }
    const spclChars = ['-', '=', '!', '@', '#', '_', '$', '%', '^', '&', '*', '(', ')'];
    const spclLocal = ['-', '=', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
    if(spclChars.includes(domain[0]) || spclChars.includes(domain[domain.length - 1])) return false;
    for(let i = 0;i< local.length;i++) {
        if(spclLocal.includes(email[i])) return false;
    }
    const TLD = domain.split('.');
    if(TLD[1].length < 2) return false;
    return true;
}
