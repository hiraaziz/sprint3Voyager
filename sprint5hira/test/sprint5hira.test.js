"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const sprint5hira = require("../lib/sprint5hira-stack");
// example test. To run these tests, uncomment this file along with the
// example resource in lib/sprint5hira-stack.ts
test('S3 Bucket Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new sprint5hira.Sprint5HiraStack(app, 'MyTestStack');
    // THEN
    const template = cdk.assertions.Template.fromStack(stack);
    template.resourceCountIs('AWS::Lambda::Function', 1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByaW50NWhpcmEudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwcmludDVoaXJhLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFFbkMsd0RBQXVEO0FBRXZELHVFQUF1RTtBQUN2RSwrQ0FBK0M7QUFHL0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQixPQUFPO0lBQ1AsTUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25FLE9BQU87SUFDUCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsUUFBUSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ2F3cy1jZGstbGliL2Fzc2VydGlvbnMnO1xuaW1wb3J0ICogYXMgc3ByaW50NWhpcmEgZnJvbSAnLi4vbGliL3NwcmludDVoaXJhLXN0YWNrJ1xuXG4vLyBleGFtcGxlIHRlc3QuIFRvIHJ1biB0aGVzZSB0ZXN0cywgdW5jb21tZW50IHRoaXMgZmlsZSBhbG9uZyB3aXRoIHRoZVxuLy8gZXhhbXBsZSByZXNvdXJjZSBpbiBsaWIvc3ByaW50NWhpcmEtc3RhY2sudHNcblxuXG50ZXN0KCdTMyBCdWNrZXQgQ3JlYXRlZCcsICgpID0+IHtcbiAgICBjb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuICAgIC8vIFdIRU5cbiAgICBjb25zdCBzdGFjayA9IG5ldyBzcHJpbnQ1aGlyYS5TcHJpbnQ1SGlyYVN0YWNrKGFwcCwgJ015VGVzdFN0YWNrJyk7XG4gICAgLy8gVEhFTlxuICAgIGNvbnN0IHRlbXBsYXRlID0gY2RrLmFzc2VydGlvbnMuVGVtcGxhdGUuZnJvbVN0YWNrKHN0YWNrKTtcbiAgICB0ZW1wbGF0ZS5yZXNvdXJjZUNvdW50SXMoJ0FXUzo6TGFtYmRhOjpGdW5jdGlvbicsIDEpO1xuICB9KTtcbiJdfQ==