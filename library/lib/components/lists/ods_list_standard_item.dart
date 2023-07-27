import 'package:flutter/material.dart';

/// ODS List Selection
///
/// This list contains content and actions about a single subject.
///
/// A ripple effect is managed on list tile.
class OdsListStandardItem extends StatefulWidget {
  /// Creates an ODS List standard.
  const OdsListStandardItem({
    Key? key,
    required this.title,
    this.subtitle,
    this.image,
    this.text,
    this.icon,
  }) : super(key: key);

  /// The list's title .
  final String title;

  /// The optional list's subtitle displayed below the title.
  final String? subtitle;

  /// The image displayed in the list.
  ///TODO For the moment the fit of the image is handled by the provided image. It should be done in the library but we need help to do that!
  final Widget? image;

  /// The text displayed in the list trailing.
  final String? text;

  /// The icon displayed in the list trailing.
  final Widget? icon;

  @override
  State<OdsListStandardItem> createState() => _OdsListStandardItemState();
}

class _OdsListStandardItemState extends State<OdsListStandardItem> {
  @override
  Widget build(BuildContext context) {
    return Semantics(
      container: true,
      label: 'Liste de sélections',
      child: MergeSemantics(
        child: Column(
          children: [
            ListTile(
              leading: widget.image,
              title: Text(
                widget.title,
                style: Theme.of(context).textTheme.titleSmall,
              ),
              subtitle: widget.subtitle != null
                  ? Text(
                      widget.subtitle!,
                      style: Theme.of(context).textTheme.bodyLarge,
                    )
                  : null,
              trailing: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  if (widget.text != null) Text(widget.text!),
                  if (widget.icon != null) widget.icon!, // icon-2
                ],
              ),
            ),
            const Divider(),
          ],
        ),
      ),
    );
  }
}
