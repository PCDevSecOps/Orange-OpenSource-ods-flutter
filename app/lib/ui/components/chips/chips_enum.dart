import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/ods_flutter_app_localizations.dart';

enum ChipsEnum { none, avatar, icon }

extension CustomElementExtension on ChipsEnum {
  String stringValue(BuildContext context) {
    switch (this) {
      case ChipsEnum.none:
        return AppLocalizations.of(context)!.chipsEnumNone;
      case ChipsEnum.avatar:
        return AppLocalizations.of(context)!.chipsEnumAvatar;
      case ChipsEnum.icon:
        return AppLocalizations.of(context)!.chipsEnumIcon;
      default:
        return "";
    }
  }
}