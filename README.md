# odd PolicyUserModel

## Usage

```js
// policy_user_models/application_policy_user_model.js
import PolicyUserModelBase from "odd-policy_user_model";

class ApplicationPolicyUserModel extends PolicyUserModelBase {
  constructor(jwtPayload) {
    super(jwtPayload);
  }

  isGuest() {
    return this.role === "guest";
  }

  isOwner() {
    return this.type === "Admin" && this.role === "owner";
  }

  isManager() {
    return this.type === "Admin" && this.role === "manager";
  }

  isMember() {
    return this.type === "Admin" && this.role === "member";
  }
}

// policy_user_models/admin.js
class Admin extends ApplicationPolicyUserModel {
  constructor(jwtPayload) {
    super(jwtPayload);
  }
}

// policy_user_models/member.js
class Member extends ApplicationPolicyUserModel {
  constructor(jwtPayload) {
    super(jwtPayload);
  }
}

// policy_user_models/guest.js
class Guest extends ApplicationPolicyUserModel {
  constructor(jwtPayload) {
    super(jwtPayload);
  }
}
```
