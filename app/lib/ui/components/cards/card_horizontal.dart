import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/ods_flutter_app_localizations.dart';
import 'package:ods_flutter/components/button/ods_button.dart';
import 'package:ods_flutter/components/button/ods_outlined_button.dart';
import 'package:ods_flutter/components/card/ods_cards_common.dart';
import 'package:ods_flutter/components/card/ods_horizontal_card.dart';
import 'package:ods_flutter/components/chips/ods_filter_chips.dart';
import 'package:ods_flutter/components/sheets_bottom/ods_sheets_bottom.dart';
import 'package:ods_flutter/guidelines/spacings.dart';
import 'package:ods_flutter_demo/main.dart';
import 'package:ods_flutter_demo/ui/components/cards/card_customization.dart';
import 'package:ods_flutter_demo/ui/components/cards/card_enum.dart';
import 'package:ods_flutter_demo/ui/main_app_bar.dart';
import 'package:ods_flutter_demo/ui/utilities/component_count_row.dart';

class CardHorizontal extends StatefulWidget {
  const CardHorizontal({super.key});

  @override
  State<CardHorizontal> createState() => _CardHorizontalState();
}

class _CardHorizontalState extends State<CardHorizontal> {
  final _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return CardCustomization(
      child: Scaffold(
          bottomSheet: OdsSheetsBottom(
            content: _CustomizationContent(),
            title: AppLocalizations.of(context)!.componentCustomizeTitle,
          ),
          key: _scaffoldKey,
          appBar: MainAppBar(
              AppLocalizations.of(context)!.componentCardHorizontalTitle),
          body: _Body()),
    );
  }
}

class _Body extends StatelessWidget {
  var recipe =
      OdsApplication.recipes[Random().nextInt(OdsApplication.recipes.length)];

  @override
  Widget build(BuildContext context) {
    final CardCustomizationState? customizationState =
        CardCustomization.of(context);

    List<Widget> listButtons = [
      OdsOutlinedButton(
        text: AppLocalizations.of(context)!.componentElementButton1,
        onClick: () {},
      ),
      OdsButton(
        text: AppLocalizations.of(context)!.componentElementButton2,
        style: OdsButtonStyle.functionalPrimary,
        onClick: () {},
      ),
    ];

    List<Widget> buttons =
        listButtons.sublist(0, customizationState?.numberOfItems);

    OdsOutlinedButton? firstButton;
    OdsButton? secondButton;

    if (buttons.isNotEmpty) {
      firstButton = buttons[0] as OdsOutlinedButton;
    }
    if (buttons.length > 1) {
      secondButton = buttons[1] as OdsButton;
    }

    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(spacingM),
        child: SingleChildScrollView(
          child: OdsHorizontalCard(
            image: OdsCardImage(
              imageProvider: NetworkImage(recipe.url),
              contentDescription: '', //Optional
              alignment: Alignment.center,
              contentScale: BoxFit.cover,
            ),
            title: recipe.title,
            subtitle: customizationState?.hasSubtitle == true
                ? recipe.subtitle
                : null,
            text:
                customizationState?.hasText == true ? recipe.description : null,
            firstButton: firstButton,
            secondButton: secondButton,
            imagePosition: customizationState?.selectedElement == CardEnum.start
                ? OdsHorizontalCardImagePosition.start
                : OdsHorizontalCardImagePosition.end,
            divider: customizationState!.hasDivider == true ? true : false,
            onClick: customizationState.clickable ? () {} : null,
          ),
        ),
      ),
    );

    /*
    return Scaffold(
      body: Center(
        child: SizedBox(
          width: double.infinity,
          child: Card(
            child: IntrinsicHeight(
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: <Widget>[
                  Image.network(
                    recipe.url,
                    width: 150,
                    height: 0.0,
                    fit: BoxFit.cover,
                  ),
                  Expanded(
                    child: Padding(
                      padding: EdgeInsets.all(12),
                      child: Text(recipe.description,
                          maxLines: 2, overflow: TextOverflow.ellipsis),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );

     */
  }
}

class _CustomizationContent extends StatefulWidget {
  @override
  State<_CustomizationContent> createState() => _CustomizationContentState();
}

class _CustomizationContentState extends State<_CustomizationContent> {
  int selectedIndex = 0;
  bool isFiltered = true;

  @override
  Widget build(BuildContext context) {
    final CardCustomizationState? customizationState =
        CardCustomization.of(context);
    return Column(
      children: [
        SwitchListTile(
            value: customizationState?.clickable ?? true,
            title: Text(AppLocalizations.of(context)!.componentCardClickable),
            onChanged: (bool value) {
              customizationState?.clickable = value;
            }),
        Align(
          alignment: Alignment.centerLeft,
          child: Padding(
            padding: const EdgeInsets.all(spacingM),
            child: Text(
              AppLocalizations.of(context)!
                  .componentCardHorizontalImagePosition,
              style: Theme.of(context).textTheme.bodyLarge,
              textAlign: TextAlign.left,
            ),
          ),
        ),
        Align(
          alignment: Alignment.centerLeft,
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: List<Widget>.generate(2, (int index) {
                bool isSelected = selectedIndex == index;
                return Padding(
                  padding: EdgeInsets.only(right: spacingXs, left: spacingS),
                  child: OdsFilterChips(
                    label: customizationState?.elements[index]
                            .stringValue(context) ??
                        '',
                    isSelected: isSelected,
                    onSelected: (selected) {
                      setState(() {
                        selectedIndex = index;
                        isFiltered = selected!;
                        customizationState?.selectedElement =
                            customizationState.elements[index];
                      });
                    },
                  ),
                );
              }),
            ),
          ),
        ),
        SwitchListTile(
            value: customizationState?.hasSubtitle ?? true,
            title: Text(AppLocalizations.of(context)!.componentElementSubtitle),
            onChanged: (bool value) {
              customizationState?.hasSubtitle = value;
            }),
        SwitchListTile(
            value: customizationState?.hasText ?? true,
            title: Text(AppLocalizations.of(context)!.componentElementText),
            onChanged: (bool value) {
              customizationState?.hasText = value;
            }),
        ComponentCountRow(
            title: AppLocalizations.of(context)!.componentCardActionButtonCount,
            minCount: CardCustomizationState.minNavigationItemCount,
            maxCount: CardCustomizationState.maxNavigationItemCount,
            count: customizationState!.numberOfItems,
            onChanged: (value) {
              customizationState.numberOfItems = value;
            }),
        SwitchListTile(
            value: customizationState.hasDivider,
            title: Text(AppLocalizations.of(context)!.componentElementDivider),
            onChanged: (bool value) {
              customizationState.hasDivider = value;
            }),
      ],
    );
  }
}